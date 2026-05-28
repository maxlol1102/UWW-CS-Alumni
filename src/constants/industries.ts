export const INDUSTRIES = [
  'Software Engineering',
  'Data Science / AI',
  'Cybersecurity',
  'DevOps / Infrastructure',
  'Product Management',
  'IT / Systems',
  'Finance / FinTech',
  'Healthcare Tech',
  'Education',
  'Consulting',
  'Game Development',
  'Other',
] as const

const currentYear = new Date().getFullYear()
export const GRADUATION_YEARS = Array.from(
  { length: currentYear - 2013 + 1 },
  (_, i) => currentYear - i
)
