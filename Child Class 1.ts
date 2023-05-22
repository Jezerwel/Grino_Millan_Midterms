import {garden}  from './interface and parent class'

class rootZoneCoolingGarden extends garden {
  protected rootZoneCoolingSystemState: boolean
  protected fertilizerConcentration: number

  constructor () {
    super('Root Zone Cooling Garden Shed')
    this.rootZoneCoolingSystemState = false // Default root zone cooling system state
    this.fertilizerConcentration = 1.0 // Default fertilizer concentration
    this.setEnergySourceType('solar') // Implementing energySourceType attribute
    this.setWasteManagementSystem('composting') // Implementing wasteManagementSystem attribute
  }

  setFertilizerConcentration (concentration: number): void {
    this.fertilizerConcentration = concentration
  }

  getFertilizerConcentration (): number {
    return this.fertilizerConcentration
  }

  setRootZoneCoolingSystemState (state: boolean): void {
    this.rootZoneCoolingSystemState = state
  }

  getRootZoneCoolingSystemState (): boolean {
    return this.rootZoneCoolingSystemState
  }

  getDescription (): string {
    let coolingSystemStateText: string
    if (this.rootZoneCoolingSystemState) {
      coolingSystemStateText = 'with a Root Zone Cooling System'
    } else {
      coolingSystemStateText = 'without Root Zone Cooling System'
    }
    return `${this.description} ${coolingSystemStateText}.`
  }

  waterPlants (): void {
    console.log('\nWatering the plants and adding fertilizer.')
  }

  protected calculatePlantGrowthRate (): number {
    const baseGrowthRate = super.calculatePlantGrowthRate()
    const fertilizerFactor = this.fertilizerConcentration * 1.5
    const rootZoneCoolingSystemFactor = this.rootZoneCoolingSystemState
      ? 1.3
      : 1
    return (baseGrowthRate + fertilizerFactor) * rootZoneCoolingSystemFactor
  }
}

const controlGarden = new rootZoneCoolingGarden()

controlGarden.setTemperatureAndHumidity(28, 60)
controlGarden.setLightIntensity(90)
controlGarden.setAirCirculationSpeed(3)
controlGarden.setPestControlStatus(false)
controlGarden.setWaterStorageCapacity(100)
controlGarden.setFertilizerConcentration(1.2)
controlGarden.setRootZoneCoolingSystemState(false)
controlGarden.setEnergySourceType('artificial')
controlGarden.setWasteManagementSystem('none')
controlGarden.waterPlants()

console.log('Description:', controlGarden.getDescription())
console.log('Temperature:', controlGarden.getTemperature())
console.log('Humidity:', controlGarden.getHumidity())
console.log('Light Intensity:', controlGarden.getLightIntensity())
console.log('Air Circulation Speed:', controlGarden.getAirCirculationSpeed())
console.log('Pest Control Status:', controlGarden.getPestControlStatus())
console.log('Water Storage Capacity:', controlGarden.getWaterStorageCapacity())
console.log(
  'Fertilizer Concentration:',
  controlGarden.getFertilizerConcentration()
)
console.log(
  'Root Zone Cooling System State:',
  controlGarden.getRootZoneCoolingSystemState()
)
console.log('Energy Source:', controlGarden.getEnergySourceType())
console.log(
  'Waste Management System:',
  controlGarden.getWasteManagementSystem()
)
console.log(
  'Growth Rate (Garden Shed only):',
  controlGarden.getPlantGrowthRate().toFixed(2),
  'in/year'
)

const rootZoneGarden = new rootZoneCoolingGarden()

rootZoneGarden.setTemperatureAndHumidity(28, 60)
rootZoneGarden.setLightIntensity(90)
rootZoneGarden.setAirCirculationSpeed(3)
rootZoneGarden.setPestControlStatus(true)
rootZoneGarden.setWaterStorageCapacity(100)
rootZoneGarden.setFertilizerConcentration(1.2)
rootZoneGarden.setRootZoneCoolingSystemState(true)
rootZoneGarden.setEnergySourceType('solar')
rootZoneGarden.setWasteManagementSystem('composting')
rootZoneGarden.waterPlants()

console.log('Description:', rootZoneGarden.getDescription())
console.log('Temperature:', rootZoneGarden.getTemperature())
console.log('Humidity:', rootZoneGarden.getHumidity())
console.log('Light Intensity:', rootZoneGarden.getLightIntensity())
console.log('Air Circulation Speed:', rootZoneGarden.getAirCirculationSpeed())
console.log('Pest Control Status:', rootZoneGarden.getPestControlStatus())
console.log('Water Storage Capacity:', rootZoneGarden.getWaterStorageCapacity())
console.log(
  'Fertilizer Concentration:',
  rootZoneGarden.getFertilizerConcentration()
)
console.log(
  'Root Zone Cooling System State:',
  rootZoneGarden.getRootZoneCoolingSystemState()
)
console.log('Energy Source:', rootZoneGarden.getEnergySourceType())
console.log(
  'Waste Management System:',
  rootZoneGarden.getWasteManagementSystem()
)
console.log(
  'Growth Rate (Root Zone Cooling Garden Shed):',
  rootZoneGarden.getPlantGrowthRate().toFixed(2),
  'in/year'
)
