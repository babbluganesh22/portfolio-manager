// src/utils/experience.js

function calculateExperience(startDate) {
  const start = new Date(startDate)
  const now = new Date()

  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth()
  let days = now.getDate() - start.getDate()

  // Borrow days from the previous month if negative
  if (days < 0) {
    months -= 1
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0) // last day of previous month
    days += prevMonth.getDate()
  }

  // Borrow months from the previous year if negative
  if (months < 0) {
    years -= 1
    months += 12
  }

  const totalDecimalYears = years + months / 12

  return {
    years,
    months,
    days,
    formatted: `${years} yr${years !== 1 ? 's' : ''} ${months} mo${months !== 1 ? 's' : ''}`,
    decimalYears: totalDecimalYears.toFixed(1), // e.g. "1.8"
    roundedYears: Math.round(totalDecimalYears),  // e.g. 2, useful for a "2+ years" style stat
  }
}

export default calculateExperience