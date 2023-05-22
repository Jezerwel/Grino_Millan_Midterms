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

export abstract class garden implements environmentallyControlledGarden {
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
