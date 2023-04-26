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
