<template>
  <v-row class="px-0 py-3 pa-sm-5">
    <v-col cols="12" lg="7">
      <v-card flat class="pa-4">
        <h2 class="pb-3">
          Median Earnings&nbsp;<TooltipModal
            definition="institution-median-earnings"
            :isBranch="isBranch"
          />
        </h2>
        <h2
          v-if="medianEarnings"
          class="text-h4 medium-light-blue-text font-weight-bold mb-3"
        >
          {{ toDollar(medianEarnings) }}
        </h2>
        <p class="mb-2">
          The median earnings of former students who
          received federal financial aid at 10 years after
          entering the school.
        </p>
        <div style="max-width: 500px;">
          <Toggle
            v-model="medianToggle"
            :options="[
              { label: `${yearsText(school)} Schools`, value: 'group', color: color('primary-green'), activeColor: 'transparent' },
              { label: 'All Schools', value: 'all', color: color('primary-green'), activeColor: '#transparent' },
            ]"
            backgroundColor="white"
            borderThickness="5px"
            :height="50"
          >
            <template #default="{ label }">
              <span class="compare-tab-title px-5 text-black">
                {{ label }}
              </span>
            </template>
          </Toggle>
        </div>
        <Spacer :height="20" />

        <ChartHorizontalBarRangeSimplified
          :hasData="medianEarnings"
          :showMinMax="true"
          :value="{
            label: toDollar(medianEarnings),
            value: medianEarnings,
          }"
          :min="{
            label: '$0',
            value: 0,
          }"
          :max="{
            label: '$100,000+',
            value: 100000,
          }"
          :midpoint="{
            label:
              'Midpoint: ' +
              toDollar(
                medianToggle === 'group'
                  ? Math.round(parseFloat(toggleMedianEarnings[0]))
                  : Math.round(parseFloat(toggleMedianEarnings[1])),
              ),
            value:
              medianToggle === 'group'
                ? toggleMedianEarnings[0]
                : toggleMedianEarnings[1],
            show: true,
          }"
        />
      </v-card>
    </v-col>
    <v-col cols="12" lg="5">
      <v-card flat class="pa-4 mb-4">
        <h2 class="mb-2">
          Percentage Earning More Than a High School
          Graduate&nbsp;<TooltipModal
            definition="threshold-earnings"
          />
        </h2>
        <div
          v-if="percentMoreThanHS"
          class="d-flex align-end"
        >
          <h2
            class="text-h4 medium-light-blue-text font-weight-bold"
          >
            {{ toPercent(percentMoreThanHS) }}
          </h2>
          <span>&nbsp;of students</span>
        </div>
        <div v-else class="data-na mb-4">
          Data Not Available
        </div>
      </v-card>
      <v-card flat class="pa-4">
        <h2>
          Earnings After Completing Field of
          Study&nbsp;<TooltipModal
            definition="fos-median-earnings"
          />
        </h2>

        <p class="mt-2">
          Salary information for Fields of Study available
          at this school are in the
          <NuxtLink :to="fieldsLink">All Fields of Study</NuxtLink>
          page.
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
  const { yearsText } = useFilters()
  const { toDollar, toPercent } = useNumberFormatter()
  const { color } = useVuetify()
  const props = defineProps({
    school: {
      type: Object,
      required: true,
    },
  })

  const {
    isBranch: isBranchMethod,
    groupName: groupNameMethod,
    medianEarnings: medianEarningsMethod,
    toggleMedianEarnings: toggleMedianEarningsMethod,
    percentMoreThanHS: percentMoreThanHSMethod,
    fieldsLink: fieldsLinkMethod,
  } = useComplexFieldMethods()

  const isBranch = computed(() => isBranchMethod(props.school))
  const groupName = computed(() => groupNameMethod(props.school))
  const medianEarnings = computed(() => medianEarningsMethod(props.school))
  const toggleMedianEarnings = computed(() => toggleMedianEarningsMethod(props.school))
  const percentMoreThanHS = computed(() => percentMoreThanHSMethod(props.school))
  const fieldsLink = computed(() => fieldsLinkMethod(props.school))

  const medianToggle = ref('group')
  const handleMedianToggle = (toggleValue) => {
    medianToggle.value = toggleValue === 0 ? "group" : "all"
  }
</script>