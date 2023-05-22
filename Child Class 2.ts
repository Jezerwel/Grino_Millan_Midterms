import { garden } from './interface and parent class'

class aeroponicGarden extends garden {
  protected mistingInterval: number
  protected nutrientConcentration: number

  constructor () {
    super('Aeroponic Garden Shed')
    this.mistingInterval = 15
    this.nutrientConcentration = 1.2
    this.setPestControlStatus(true) // Implementing pestControlStatus attribute
    this.setWaterStorageCapacity(200) // Implementing waterStorageCapacity attribute
  }

  setMistingInterval (interval: number): void {
    this.mistingInterval = interval
  }

  setNutrientConcentration (concentration: number): void {
    this.nutrientConcentration = concentration
  }

  getMistingInterval (): number {
    return this.mistingInterval
  }

  getNutrientConcentration (): number {
    return this.nutrientConcentration
  }

  protected calculatePlantGrowthRate (): number {
    const baseGrowthRate = super.calculatePlantGrowthRate()
    const mistingIntervalFactor = 3 / this.mistingInterval
    const nutrientConcentrationFactor = this.nutrientConcentration * 3.5
    return baseGrowthRate * mistingIntervalFactor * nutrientConcentrationFactor
  }

  getDescription (): string {
    return `${this.description} with an Aeroponic System.`
  }

  waterPlants (): void {
    console.log(`\nMisting plants with a nutrient-rich solution.`)
  }
}

const aeroponicSystemGarden = new aeroponicGarden()

aeroponicSystemGarden.setMistingInterval(10)
aeroponicSystemGarden.setNutrientConcentration(1.6)
aeroponicSystemGarden.setTemperatureAndHumidity(28, 60)
aeroponicSystemGarden.setLightIntensity(90)
aeroponicSystemGarden.setAirCirculationSpeed(3)
aeroponicSystemGarden.setPestControlStatus(true)
aeroponicSystemGarden.setEnergySourceType('solar')
aeroponicSystemGarden.setWasteManagementSystem('composting')
aeroponicSystemGarden.waterPlants()

console.log('Description:', aeroponicSystemGarden.getDescription())
console.log('Misting Interval:', aeroponicSystemGarden.getMistingInterval())
console.log(
  'Nutrient Concentration:',
  aeroponicSystemGarden.getNutrientConcentration()
)
console.log('Temperature:', aeroponicSystemGarden.getTemperature())
console.log('Humidity:', aeroponicSystemGarden.getHumidity())
console.log('Light Intensity:', aeroponicSystemGarden.getLightIntensity())
console.log(
  'Air Circulation Speed:',
  aeroponicSystemGarden.getAirCirculationSpeed()
)
console.log(
  'Pest Control Status:',
  aeroponicSystemGarden.getPestControlStatus()
)
console.log('Energy Source:', aeroponicSystemGarden.getEnergySourceType())
console.log(
  'Waste Management System:',
  aeroponicSystemGarden.getWasteManagementSystem()
)
console.log(
  'Growth Rate (Aeroponic Garden Shed):',
  aeroponicSystemGarden.getPlantGrowthRate().toFixed(2),
  'in/year'
)
