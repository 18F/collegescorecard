<template>
  <v-row class="px-0 py-3 pa-sm-5">
    <v-col cols="12" md="9">
      <v-card flat class="pa-4">
        <h2 class="mb-4">
          Test Scores
          <TooltipModal definition="test-scores" />
        </h2>
        <p>{{ standardizedTestText }}</p>
        <div
          v-show="
            standardizedTestValue != 3 &&
            standardizedTestValue != 4 &&
            standardizedTestValue != 2 &&
            standardizedTestValue != null
          "
        >
          <Spacer :height="15"/>
          <h3 class="text-h5 font-weight-bold mb-2">SAT</h3>

          <h4 class="text-uppercase">Critical Reading</h4>
          <ChartRange
            v-if="satReading.available"
            :lower="{
              value: satReading.lower,
              label: satReading.lower,
            }"
            :upper="{
              value: satReading.upper,
              label: satReading.upper,
            }"
            :min="{
              value: satReading.min,
              label: satReading.min,
            }"
            :max="{
              value: satReading.max,
              label: satReading.max,
            }"
            hideMiddle
          />
          <p v-else class="data-na">Data Not Available</p>

          <h4 class="text-uppercase">Math</h4>
          <ChartRange
            v-if="satMath.available"
            :lower="{
              value: satMath.lower,
              label: satMath.lower,
            }"
            :upper="{
              value: satMath.upper,
              label: satMath.upper,
            }"
            :min="{
              value: satMath.min,
              label: satMath.min,
            }"
            :max="{
              value: satMath.max,
              label: satMath.max,
            }"
            hideMiddle
          />
          <p v-else class="data-na">Data Not Available</p>

          <Spacer :height="15"/>
          <h3 class="text-h5 font-weight-bold mb-2">ACT</h3>

          <ChartRange
            v-if="act.available"
            :lower="{ value: act.lower, label: act.lower }"
            :upper="{ value: act.upper, label: act.upper }"
            :min="{ value: act.min, label: act.min }"
            :max="{ value: act.max, label: act.max }"
            hideMiddle
          />
          <p v-else class="data-na">Data Not Available</p>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" md="3">
      <v-card class="pa-4 fill-height" flat>
        <h2 class="mb-4">
          Acceptance Rate
          <TooltipModal definition="acceptance-rate" />
        </h2>
        <div
          v-if="
            openAdmissions != 1 &&
            acceptanceRateActual != null
          "
        >
          <div class="d-flex justify-center">
            <ChartDonut
              color="secondary-blue"
              :value="acceptanceRateActual * 100"
              label="Acceptance Rate"
              size="108px"
            />
          </div>
          <div class="sr-only">
            Acceptance Rate:
            {{ Math.round(acceptanceRateActual * 100) + "%" }}
          </div>
        </div>
        <div v-else-if="openAdmissions == 1">
          <div class="d-flex justify-center">
            <ChartDonut
              color="secondary-blue"
              :value="100"
              label="Acceptance Rate"
              size="108px"
            />
          </div>
          <div class="sr-only">
            Acceptance Rate: {{ Math.round(100) + "%" }}
          </div>
        </div>
        <p
          v-else-if="!acceptanceRateActual"
          class="data-na"
        >
          Data Not Available
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const props = defineProps({
  school: {
    type: Object,
    required: true,
  }
})

const {
  standardizedTestText: standardizedTestTextMethod,
  standardizedTestValue: standardizedTestValueMethod,
  satReading: satReadingMethod,
  satMath: satMathMethod,
  act: actMethod,
  openAdmissions: openAdmissionsMethod,
  acceptanceRateActual: acceptanceRateActualMethod,
} = useComplexFieldMethods()

const standardizedTestText = computed(() => standardizedTestTextMethod(props.school))
const standardizedTestValue = computed(() => standardizedTestValueMethod(props.school))
const satReading = computed(() => satReadingMethod(props.school))
const satMath = computed(() => satMathMethod(props.school))
const act = computed(() => actMethod(props.school))
const openAdmissions = computed(() => openAdmissionsMethod(props.school))
const acceptanceRateActual = computed(() => acceptanceRateActualMethod(props.school))
</script>