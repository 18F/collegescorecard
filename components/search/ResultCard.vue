<template>
  <v-card
    class="search-result-card mx-auto elevation-0"
    outlined
    :class="{ 'result-card-selected': isSelected, 'loading': isLoading }"
  >
    <v-card-text class="pa-3" style="flex-grow:1">
      <p class="mt-1 mb-2" v-if="underInvestigation == 1">
        <v-card color="error" class="px-2 py-1" flat>
          <strong class="white--text">Under ED Monitoring</strong>
          <TooltipModal definition="hcm2" color="white" class="ml-2" />
        </v-card>
      </p>

      <v-tooltip :disabled="isLoading" location="bottom" :aria-label="isSelected ? 'Remove school from compare' : compareHoverCountText">
        <template v-slot:activator="{ props }">
          <v-btn
            icon
            class="float-right position-relative search-result-card-compare"
            style="bottom: 8px;"
            @click="!isLoading ? store.toggleSchool(school) : () => {}"
            :class="[isSelected ? '' : compareSchoolsLength > 9 ? 'noCompareAllow' : '']"
            v-bind="props"
            aria-label="Add to compare"
          >
            <v-icon :color="isSelected ? '#0075B2' : 'grey'" icon="fa:fa fa-check-circle"></v-icon>
            <span class="sr-only">Compare</span>
          </v-btn>
        </template>
        <div class="hover-tip">{{ isSelected ? 'Added to compare' : compareHoverCountText }}</div>
      </v-tooltip>

      <p class="text-uppercase mb-1 mt-1">{{ city }}, {{ state }}</p>
      <h2 class="title mt-0 font-weight-bold">
        <NuxtLink class="nameLink" :to="schoolLink">{{ schoolName }}</NuxtLink>
      </h2>

      <v-row>
        <v-col cols="12" class="my-4 mb-1">
          <SmallSchoolIcons :school="school" :fields="fields" size="small" />
        </v-col>
      </v-row>

      <v-row class="v-flex align-center">
        <v-col class="pb-1">
          <span class="search-result-label">
            Graduation Rate&nbsp;
            <TooltipModal
              definition="graduation-rate"
              :version="completionRateFieldDefinition"
            />
          </span>
        </v-col>
      </v-row>
      <v-row class="mt-1">
        <v-col class="text--black py-0">
          <h3 class="navy-text ma-0 pa-0">{{ displayGradRate }}</h3>
        </v-col>
      </v-row>

      <v-row class="v-flex align-center">
        <v-col class="pb-1">
          <span v-if="!isProgramReporter" class="search-result-label">
            Average Annual Cost&nbsp;
            <TooltipModal
              definition="avg-cost"
              :isNegative="netPrice < 0"
            />
          </span>
          <span v-else class="search-result-label">
            Average Annual Cost for Largest Program&nbsp;
            <TooltipModal
              definition="avg-program-cost"
              :isNegative="netPrice < 0"
            />
          </span>
        </v-col>
      </v-row>
      <v-row class="mt-1">
        <v-col class="text--black py-0">
          <h3 class="navy-text ma-0 pa-0">{{ displayAvgCost }}</h3>
        </v-col>
      </v-row>

      <v-row class="v-flex align-center">
        <v-col class="pb-1">
          <span class="search-result-label">
            Median Earnings&nbsp;
            <TooltipModal
              definition="institution-median-earnings"
              :isBranch="isBranch"
            />
          </span>
        </v-col>
      </v-row>
      <v-row class="mt-1">
        <v-col class="text--black py-0">
          <h3 class="navy-text ma-0">{{ displayEarn }}</h3>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="card-actions">
      <v-btn
        :href="schoolLink"
        class="text-center"
        variant="outlined"
        color="black"
        width="100%"
        :disabled="isLoading"
      >
        View School
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const { toPercent, toK } = useNumberFormatter()

const props = defineProps({
  school: Object,
  schoolsCount: Number,
  isLoading: Boolean,
})

const store = useCompareStore()

const {
  completionRateOverall: completionRateOverallMethod,
  netPrice: netPriceMethod,
  medianEarnings: medianEarningsMethod,
  isProgramReporter: isProgramReporterMethod,
  isBranch: isBranchMethod,
  completionRateFieldDefinition: completionRateFieldDefinitionMethod,
  underInvestigation: underInvestigationMethod,
  city: cityMethod,
  state: stateMethod,
  schoolName: schoolNameMethod,
  schoolLink: schoolLinkMethod,
} = useComplexFieldMethods()

// Computed properties
const completionRateOverall = computed(() => completionRateOverallMethod(props.school))
const netPrice = computed(() => netPriceMethod(props.school))
const medianEarnings = computed(() => medianEarningsMethod(props.school))
const isProgramReporter = computed(() => isProgramReporterMethod(props.school))
const isBranch = computed(() => isBranchMethod(props.school))
const completionRateFieldDefinition = computed(() => completionRateFieldDefinitionMethod(props.school))
const underInvestigation = computed(() => underInvestigationMethod(props.school))
const city = computed(() => cityMethod(props.school))
const state = computed(() => stateMethod(props.school))
const schoolName = computed(() => schoolNameMethod(props.school))
const schoolLink = computed(() => schoolLinkMethod(props.school))

const { fields } = useConstants() 

const displayGradRate = computed(() => {
  if (!completionRateOverall.value) return 'N/A'
  return toPercent(parseFloat(completionRateOverall.value))
})

const compareHoverCountText = computed(() => {
  return store.institutions.length > 9
    ? 'Maximum of 10 Schools reached'
    : 'Add School to compare'
})

const compareSchoolsLength = computed(() => store.institutions.length)

const displayEarn = computed(() => {
  if (!medianEarnings.value) return 'N/A'
  return toK(medianEarnings.value)
})

const displayAvgCost = computed(() => {
  if (!netPrice.value) return 'N/A'
  return toK(netPrice.value)
})

const isSelected = computed(() => store.institutions.find(({ id }) => id == props.school.id) != undefined);
</script>

<style lang="scss" scoped>
.loading {
  opacity: 0.6;
  filter: blur(1px);
}
.nameLink {
  text-decoration: none;
  line-height: 125%;
  &:hover {
    text-decoration: underline;
  }
}

.search-result-card {
  border: 4px solid white !important;
  width: 100%;
  position: relative;
  padding-bottom: 60px;

  h3 {
    font-size: 24px;
  }
}

.result-card-selected {
  border: 4px solid #a6cfe4 !important;
}

.card-actions {
  position: absolute;
  bottom: 0;
  width: 100%;
  a {
    border-color: #D8DFE8 !important;
    color: black !important;
    &:hover {
      background: use-theme('secondary-green');
      color: #fff !important;
    }
  }
}

.moreDetails {
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
}

.noCompareAllow {
  cursor: not-allowed !important;
}

.search-result-label {
  font-size: 13px;
  text-transform: uppercase;
  color: black;
}
</style>