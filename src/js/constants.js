// Fields
export const fields = {
  ID:                   'id',
  // OPEID8:               'ope8_id',
  NAME:                 'school.name',
  CITY:                 'school.city',
  STATE:                'school.state',
  ZIP_CODE:             'school.zip',
  SEARCH:               'school.search',
  ALIAS:                'school.alias',

  SCHOOL_URL:           'school.school_url',

  LOCATION:             'location',
  OWNERSHIP:            'school.ownership',
  LOCALE:               'school.locale',
  REGION_ID:            'school.region_id',

  RELIGIOUS:            'school.religious_affiliation',
  OPERATING:            'school.operating',

  SIZE:                 'latest.student.size',
  ONLINE_ONLY:          'school.online_only',
  MAIN:                 'school.main_campus',
  BRANCHES:             'school.branches',

  WOMEN_ONLY:           'school.women_only',
  MEN_ONLY:             'school.men_only',
  MINORITY_SERVING:     'school.minority_serving',

  PREDOMINANT_DEGREE:   'school.degrees_awarded.predominant',
  HIGHEST_DEGREE:       'school.degrees_awarded.highest',
  UNDER_INVESTIGATION:  'school.under_investigation',
  AID_ELIGIBILITY:      'school.title_iv.eligibility_type',

  // net price
  NET_PRICE:            'latest.cost.avg_net_price.overall',
  NET_PRICE_BY_INCOME:  'latest.cost.net_price',

  // completion rate
  //COMPLETION_RATE:      'latest.completion.rate_suppressed.overall',
  COMPLETION_RATE:      'latest.completion.consumer_rate',

  // new rates
  COMPLETION_OM:        'latest.completion.outcome_percentage_suppressed.all_students.8yr.award_pooled',
  COMPLETION_200_4:     'latest.completion.rate_suppressed.four_year_200percent',
  COMPLETION_200_LT4:   'latest.completion.rate_suppressed.lt_four_year',
  
  RETENTION_RATE:       'latest.student.retention_rate_suppressed',

  REPAYMENT_RATE:       'latest.repayment.3_yr_repayment_suppressed.overall',

  AVERAGE_TOTAL_DEBT:   'latest.aid.median_debt_suppressed.completers.overall',
  MONTHLY_LOAN_PAYMENT: 'latest.aid.median_debt_suppressed.completers.monthly_payments',

  // AID_PERCENTAGE:       'latest.aid.ftft_federal_loan_rate',
  // PELL_PERCENTAGE:      'latest.aid.ftft_pell_grant_rate',
  AID_PERCENTAGE:       'latest.aid.ftft_federal_loan_rate_pooled',
  PELL_PERCENTAGE:      'latest.aid.ftft_pell_grant_rate_pooled',

  MEDIAN_EARNINGS:      'latest.earnings.10_yrs_after_entry.median',

  EARNINGS_GT_25K:      'latest.earnings.6_yrs_after_entry.percent_greater_than_25000',

  PROGRAM_PERCENTAGE:   'latest.academics.program_percentage',
  PROGRAM_OFFERED:      'latest.academics.program',
  DEGREE_OFFERED:       'latest.academics.program_available',

  PART_TIME_SHARE:      'latest.student.part_time_share',
  FEMALE_SHARE:         'latest.student.demographics.female_share',
  RACE_ETHNICITY:       'latest.student.demographics.race_ethnicity',
  AGE_ENTRY:            'latest.student.demographics.age_entry',

  ACT_25TH_PCTILE:      'latest.admissions.act_scores.25th_percentile.cumulative',
  ACT_75TH_PCTILE:      'latest.admissions.act_scores.75th_percentile.cumulative',
  ACT_MIDPOINT:         'latest.admissions.act_scores.midpoint.cumulative',

  SAT_CUMULATIVE_AVERAGE:   'latest.admissions.sat_scores.average.overall',

  SAT_READING_25TH_PCTILE:  'latest.admissions.sat_scores.25th_percentile.critical_reading',
  SAT_READING_75TH_PCTILE:  'latest.admissions.sat_scores.75th_percentile.critical_reading',
  SAT_READING_MIDPOINT:     'latest.admissions.sat_scores.midpoint.critical_reading',

  SAT_MATH_25TH_PCTILE:     'latest.admissions.sat_scores.25th_percentile.math',
  SAT_MATH_75TH_PCTILE:     'latest.admissions.sat_scores.75th_percentile.math',
  SAT_MATH_MIDPOINT:        'latest.admissions.sat_scores.midpoint.math',

  SAT_WRITING_25TH_PCTILE:  'latest.admissions.sat_scores.25th_percentile.writing',
  SAT_WRITING_75TH_PCTILE:  'latest.admissions.sat_scores.75th_percentile.writing',
  SAT_WRITING_MIDPOINT:     'latest.admissions.sat_scores.midpoint.writing',

  ACCEPTANCE_RATE:          'latest.admissions.admission_rate.overall',
  OPEN_ADMISSIONS:          'school.open_admissions_policy',

  NET_PRICE_CALC_URL:       'school.price_calculator_url',

  // TEST
  PARENT_PLUS_ESTIMATED_PARENT_BORROWED_MIN: 'latest.aid.plus_loan_pct_lower_pooled',
  PARENT_PLUS_ESTIMATED_PARENT_BORROWED_MAX: 'latest.aid.plus_loan_pct_upper_pooled',

  PARENT_PLUS_TOTAL_DEBT: 'latest.aid.plus_debt_suppressed.completers.eval_inst.median',
  PARENT_PLUS_LOAN_PAYMENT: 'latest.aid.plus_debt_suppressed.completers.eval_inst.median_payment',
  PARENT_PLUS_TOTAL_DEBT_ALL: 'latest.aid.plus_debt_suppressed.completers.all_inst.median',
  PARENT_PLUS_LOAN_PAYMENT_ALL: 'latest.aid.plus_debt_suppressed.completers.all_inst.median_payment',

  // program reporters
  PROGRAM_REPORTER_OFFERED: 'latest.academics.program_reporter.programs_offered',
  PROGRAM_REPORTER_CIP:     'cip_6_digit',
  PROGRAM_REPORTER_COST:    'latest.cost.program_reporter',
  PROGRAM_REPORTER_PROGRAM: 'latest.academics.program_reporter',

  // field of study
  FIELD_OF_STUDY:           'latest.programs.cip_4_digit',
  FIELD_OF_STUDY_CODE:      'latest.programs.cip_4_digit.code',
  FIELD_OF_STUDY_LENGTH:    'latest.programs.cip_4_digit.credential.level',
  FIELD_OF_STUDY_NAME:      'latest.programs.cip_4_digit.title',
  // FIELD_OF_STUDY_EARNINGS:  'latest.programs.cip_4_digit.median_earnings',
  // FIELD_OF_STUDY_EARNINGS:  'latest.programs.cip_4_digit.earnings.median_earnings',
  // FIELD_OF_STUDY_DEBT:      'latest.programs.cip_4_digit.debt.median_debt',

  FIELD_OF_STUDY_EARNINGS:  'latest.programs.cip_4_digit.earnings.highest.2_yr.overall_median_earnings',
  FIELD_OF_STUDY_DEBT:      'latest.programs.cip_4_digit.debt.staff_grad_plus.all.all_inst.median',

  // New Field Of Study Metrics
  // Full Paths
  FIELD_OF_STUDY_EARNINGS_FED: 'latest.programs.cip_4_digit.earnings.highest.2_yr.median_fed',
  FIELD_OF_STUDY_EARNINGS_PELL: 'latest.programs.cip_4_digit.earnings.highest.2_yr.median_pell',

  // Relative Paths
  FOS_GRAD_COUNT: 'counts.ipeds_awards2',
  FOS_EARNINGS_FED: 'earnings.highest["2_yr"].overall_median_earnings',
  FOS_EARNINGS_PELL: 'earnings.highest["2_yr"].overall_median_earnings',

  // FOS_DEBT_MEDIAN: 'debt.test.federal.median_total_at',
  FOS_DEBT_MEDIAN: 'debt.staff_grad_plus.all.eval_inst.median',
  FOS_DEBT_MEDIAN_PRIOR: 'debt.staff_grad_plus.all.all_inst.median',
  // FOS_DEBT_MONTHLY: 'debt.test.federal.monthly_payment_at',
  FOS_DEBT_MONTHLY: 'debt.staff_grad_plus.all.eval_inst.median_payment',
  FOS_DEBT_MONTHLY_PRIOR: 'debt.staff_grad_plus.all.all_inst.median_payment',

  FOS_PP_DEBT_MEDIAN: 'debt.parent_plus.all.eval_inst.median',
  FOS_PP_DEBT_MEDIAN_PRIOR: 'debt.parent_plus.all.all_inst.median',
  FOS_PP_DEBT_MONTHLY: 'debt.parent_plus.all.all_inst.median_payment',
  FOS_PP_DEBT_MONTHLY_PRIOR: 'debt.parent_plus.all.eval_inst.median_payment',

  FOS_CREDENTIAL_LEVEL: 'credential.level',


  //Location
  LATITUDE:                 'location.lat',
  LONGITUDE:                'location.lon'
};

export const formMappings = {
  sort: {
    advantage:          fields.EARNINGS_GT_25K,
    salary:             fields.MEDIAN_EARNINGS,
    name:               fields.NAME,
    size:               fields.SIZE,
    avg_net_price:      fields.NET_PRICE,
    completion_rate:    fields.COMPLETION_RATE,
    alias:              fields.ALIAS
  },

  control: {
    'public': 1,
    'private': 2,
    'profit': 3
  },

  size: {
    small:  '1..2000',
    medium: '2000..15000',
    large:  '15001..'
  },

  degree: {
    a: '2',
    b: '3',
    c: '1'
  }
};

export const localStorageKeys = {
  COMPARE_KEY: 'compare-schools',
  COMPARE_FOS_KEY: 'compare-fos',
  SEARCH_URL_KEY: 'search-url'
};

// TODO -  Add the following items
  // API Endpoints