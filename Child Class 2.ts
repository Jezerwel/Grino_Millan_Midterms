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
