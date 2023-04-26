interface environmentallyControlledGarden {
  setTemperature(temperature: number): void
  setHumidity(humidity: number): void
  setLightIntensity(intensity: number): void
  setRootZoneCoolingSystemState(state: boolean): void
  setAirCirculationSpeed(speed: number): void
  setPestControlStatus(status: boolean): void
  setWaterStorageCapacity(capacity: number): void
  setEnergySourceType(source: string): void
  setWasteManagementSystem(system: string): void
  setTemperatureAndHumidity(temperature: number, humidity: number): void
}

abstract class garden implements environmentallyControlledGarden {
  protected temperature: number
  protected humidity: number
  protected lightIntensity: number
  protected rootZoneCoolingSystemState: boolean
  protected description: string
  protected airCirculationSpeed: number
  protected pestControlStatus: boolean
  protected waterStorageCapacity: number
  protected energySourceType: string
  protected wasteManagementSystem: string

  constructor (
    description: string, // Description of the garden
    temperature: number = 25, // Default temperature
    humidity: number = 50, // Default humidity
    lightIntensity: number = 75, // Default light intensity
    rootZoneCoolingSystemState: boolean = false, // Default root zone cooling system state
    airCirculationSpeed: number = 50, // Default air circulation speed
    pestControlStatus: boolean = false, // Default pest control status
    waterStorageCapacity: number = 100, // Default water storage capacity
    energySourceType: string = 'artificial light', // Default energy source type
    wasteManagementSystem: string = 'composting' // Default waste management system
  ) {
    this.temperature = temperature
    this.humidity = humidity
    this.lightIntensity = lightIntensity
    this.rootZoneCoolingSystemState = rootZoneCoolingSystemState
    this.description = description
    this.airCirculationSpeed = airCirculationSpeed
    this.pestControlStatus = pestControlStatus
    this.waterStorageCapacity = waterStorageCapacity
    this.energySourceType = energySourceType
    this.wasteManagementSystem = wasteManagementSystem
  }

  setTemperatureAndHumidity (temperature: number, humidity: number): void {
    this.temperature = temperature
    this.humidity = humidity
  }

  setTemperature(temperature: number): void
  setTemperature(temperature: number, humidity: number): void
  setTemperature (temperature: number, humidity?: number): void {
    this.temperature = temperature
    if (humidity !== undefined) {
      this.setHumidity(humidity)
    }
  }

  setHumidity(humidity: number): void
  setHumidity(humidity: number, temperature: number): void
  setHumidity (humidity: number, temperature?: number): void {
    this.humidity = humidity
    if (temperature !== undefined) {
      this.setTemperature(temperature)
    }
  }

  setAirCirculationSpeed (speed: number): void {
    this.airCirculationSpeed = speed
  }
  setPestControlStatus (status: boolean): void {
    this.pestControlStatus = status
  }
  setWaterStorageCapacity (capacity: number): void {
    this.waterStorageCapacity = capacity
  }
  setEnergySourceType (source: string): void {
    this.energySourceType = source
  }
  setWasteManagementSystem (system: string): void {
    this.wasteManagementSystem = system
  }
  setLightIntensity (intensity: number): void {
    this.lightIntensity = intensity
  }
  setRootZoneCoolingSystemState (state: boolean): void {
    this.rootZoneCoolingSystemState = state
  }

  getTemperature (): number {
    return this.temperature
  }
  getHumidity (): number {
    return this.humidity
  }
  getLightIntensity (): number {
    return this.lightIntensity
  }
  getRootZoneCoolingSystemState (): boolean {
    return this.rootZoneCoolingSystemState
  }
  getDescription (): string {
    return this.description
  }
  getAirCirculationSpeed (): number {
    return this.airCirculationSpeed
  }
  getPestControlStatus (): boolean {
    return this.pestControlStatus
  }
  getWaterStorageCapacity (): number {
    return this.waterStorageCapacity
  }
  getEnergySourceType (): string {
    return this.energySourceType
  }
  getWasteManagementSystem (): string {
    return this.wasteManagementSystem
  }

  protected calculatePlantGrowthRate (): number {
    const temperatureFactor = this.temperature * 0.12
    const humidityFactor = this.humidity * 0.07
    const lightIntensityFactor = this.lightIntensity * 0.09
    const airCirculationFactor = this.airCirculationSpeed * 0.05
    const pestControlFactor = this.pestControlStatus ? 1.1 : 1
    const waterStorageFactor = this.waterStorageCapacity * 0.01
    const energySourceFactor = this.energySourceType === 'solar' ? 1.2 : 1
    const wasteManagementFactor =
      this.wasteManagementSystem === 'composting' ? 1.1 : 1
    return (
      (temperatureFactor +
        humidityFactor +
        lightIntensityFactor +
        airCirculationFactor +
        waterStorageFactor) *
      pestControlFactor *
      energySourceFactor *
      wasteManagementFactor
    )
  }

  public getPlantGrowthRate (): number {
    return this.calculatePlantGrowthRate()
  }

  waterPlants (): void {
    console.log('\nWatering the plants.')
  }
}

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

console.log('\n--------------------------------------------------------------------')

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

console.log('\n--------------------------------------------------------------------')

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
