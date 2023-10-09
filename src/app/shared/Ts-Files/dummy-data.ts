export const currencies = [
  {
    id: 1, enName: 'EGP', arName: 'جنية مصري', "symbol": "EGP", base: 'EGP',
    "conversions": {
      "USD": 0.063,
      "EUR": 0.053,
      "GBP": 0.045,
      "CAD": 0.076,
      "AUD": 0.081,
      "JPY": 7.05,
      "INR": 4.18
    },
    "image": "../../../assets/images/flag/eg.svg",
  },
  {
    id: 1, enName: 'USD', arName: 'دولار أمريكي', base: 'USD',
    "symbol": "$",
    "conversions": {
      "EGP": 15.75,
      "EUR": 0.83,
      "GBP": 0.71,
      "CAD": 1.21,
      "AUD": 1.29,
      "JPY": 109.53,
      "INR": 73.63
    },
    "image": "../../../assets/images/flag/us.svg",
  },
  {
    id: 1, enName: 'EUR', arName: 'يورو', base: 'EUR',
    "symbol": "€",
    "conversions": {
      "EGP": 18.99,
      "USD": 1.21,
      "GBP": 0.86,
      "CAD": 1.47,
      "AUD": 1.57,
      "JPY": 132.78,
      "INR": 89.28
    },
    "image": "../../../assets/images/flag/eu.svg",
  },
  {
    id: 1, enName: 'GBP', arName: 'جنية إسترليني', base: 'GBP',
    "symbol": "£",
    "conversions": {
      "EGP": 22.20,
      "USD": 1.41,
      "EUR": 1.16,
      "CAD": 1.71,
      "AUD": 1.83,
      "JPY": 155.16,
      "INR": 104.23
    },
    "image": "../../../assets/images/flag/gb.svg",
  },
  {
    id: 1, enName: 'INR', arName: 'الروبية الهندية', base: 'INR', "symbol": "₹",
    "conversions": {
      "EGP": 0.24,
      "USD": 0.014,
      "EUR": 0.011,
      "GBP": 0.0096,
      "CAD": 0.017,
      "AUD": 0.018,
      "JPY": 1.49
    },
    "image": "../../../assets/images/flag/bh.svg",
  },
  {
    id: 1, enName: 'AUD', arName: 'دولار إسترليني', base: 'AUD', "symbol": "AU$",
    "conversions": {
      "EGP": 12.35,
      "USD": 0.78,
      "EUR": 0.64,
      "GBP": 0.55,
      "CAD": 0.94,
      "JPY": 81.62,
      "INR": 54.90
    },
    "image": "../../../assets/images/flag/au.svg",
  },
  {
    id: 1, enName: 'JPY', arName: 'الين الياباني', base: 'JPY', "symbol": "¥",
    "conversions": {
      "EGP": 0.14,
      "USD": 0.0091,
      "EUR": 0.0075,
      "GBP": 0.0064,
      "CAD": 0.012,
      "AUD": 0.012,
      "INR": 0.67
    },
    "image": "../../../assets/images/flag/jp.svg",
  },
]

export const currenciesData = [
  {
    "name": "United States Dollar",
    "shortName": "USD",
    "image": "../../../assets/images/flag/us.svg",
    "amount": 100000,
    "convertTo": [
      {
        "name": "Euro",
        "shortName": "EUR",
        "image": "../../../assets/images/flag/eu.svg",
        "conversionRate": 0.85,
        "convertedAmount": 85000,
        "parentConversionRate": 1.18
      },
      {
        "name": "British Pound",
        "shortName": "GBP",
        "image": "../../../assets/images/flag/gb.svg",
        "conversionRate": 0.72,
        "convertedAmount": 72000,
        "parentConversionRate": 1.39
      },
      {
        "name": "Japanese Yen",
        "shortName": "JPY",
        "image": "../../../assets/images/flag/jp.svg",
        "conversionRate": 109.35,
        "convertedAmount": 10935000,
        "parentConversionRate": 0.0091
      },
    ]
  },
  {
    "name": "Euro",
    "shortName": "EUR",
    "image": "../../../assets/images/flag/eu.svg",
    "amount": 85000,
    "convertTo": [
      {
        "name": "British Pound",
        "shortName": "GBP",
        "image": "../../../assets/images/flag/gb.svg",
        "conversionRate": 0.85,
        "convertedAmount": 72250,
        "parentConversionRate": 1.39
      },
      {
        "name": "Japanese Yen",
        "shortName": "JPY",
        "image": "../../../assets/images/flag/jp.svg",
        "conversionRate": 129.39,
        "convertedAmount": 11005150,
        "parentConversionRate": 0.0091
      },
      {
        "name": "Egyptian Pound",
        "shortName": "EGP",
        "image": "../../../assets/images/flag/eg.svg",
        "conversionRate": 19.88,
        "convertedAmount": 1692800,
        "parentConversionRate": 0.059
      }
    ]
  },
  {
    "name": "British Pound",
    "shortName": "GBP",
    "image": "../../../assets/images/flag/gb.svg",
    "amount": 72000,
    "convertTo": [
      {
        "name": "United States Dollar",
        "shortName": "USD",
        "image": "../../../assets/images/flag/us.svg",
        "conversionRate": 1.39,
        "convertedAmount": 100080,
        "parentConversionRate": 0.72
      },
      {
        "name": "Euro",
        "shortName": "EUR",
        "image": "../../../assets/images/flag/eu.svg",
        "conversionRate": 1.18,
        "convertedAmount": 85080,
        "parentConversionRate": 0.85
      },
      {
        "name": "Egyptian Pound",
        "shortName": "EGP",
        "image": "../../../assets/images/flag/eg.svg",
        "conversionRate": 27.14,
        "convertedAmount": 1954080,
        "parentConversionRate": 0.059
      }
    ]
  }
]

export const chartData = [
  { month: 'January', rate: 1.2 },
  { month: 'February', rate: 1.22 },
  { month: 'March', rate: 1.23 },
  { month: 'April', rate: 1.24 },
  { month: 'May', rate: 1.23 },
  { month: 'June', rate: 1.22 },
  { month: 'July', rate: 1.24 }
]
