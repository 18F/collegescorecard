<template>
  <h2 class="mb-5">Salary After Completing</h2>

  <div class="px-0 px-md-5">
    <CompareTooltipHeader class="mb-3" title="Median Earnings" definition="fos-median-earnings" />
    <div class="px-0 px-md-5 pb-10">
      <CompareFieldsOfStudyDataSection :fieldsOfStudy="fieldsOfStudy">
        <template #data="{ fos }">
          <ChartHorizontalBarRangeSimplified
            :hasData="medianEarnings(fos)"
            :showMinMax="true"
            :value="{
              label: toDollar(medianEarnings(fos)),
              value: medianEarnings(fos),
            }"
            :min="{
              label: '$0',
              value: 0,
            }"
            :max="{
              label: '$150,000',
              value: 150000,
            }"
          />
        </template>
      </CompareFieldsOfStudyDataSection>
    </div>

    <CompareTooltipHeader class="mb-3" title="Monthly Earnings" definition="fos-monthly-earnings" />
    <div class="px-0 px-md-5">
      <CompareFieldsOfStudyDataSection :fieldsOfStudy="fieldsOfStudy">
        <template #data="{ fos }">
          <ChartHorizontalBarRangeSimplified
            :hasData="monthlyEarnings(fos)"
            :showMinMax="true"
            :value="{
              label: toDollar(monthlyEarnings(fos)),
              value: monthlyEarnings(fos),
            }"
            :min="{
              label: '$0',
              value: 0,
            }"
            :max="{
              label: '$20,000',
              value: 20000,
            }"
          />
        </template>
      </CompareFieldsOfStudyDataSection>
    </div>
  </div>
</template>


<script setup>
const { toDollar } = useNumberFormatter();
const { fields, getNestedField } = useConstants();

const medianEarnings = (fieldOfStudy) => {
  const field = getNestedField(fieldOfStudy, fields.FOS_EARNINGS_FED_5YR)
  return field
};

const monthlyEarnings = (fieldOfStudy) => {
  const field = medianEarnings(fieldOfStudy)
  if (!field) return null
  return field / 12
};

const props = defineProps({
  fieldsOfStudy: Object,
});
</script>

<style lang="scss" scoped>
</style>