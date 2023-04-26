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
