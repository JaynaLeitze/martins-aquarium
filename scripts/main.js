import { nonHolyFish, soldierFish, useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'
import {mostHolyFish} from './fish/FishDataProvider.js'


const allTheFish = useFish()

FishList()
mostHolyFish()
soldierFish()
nonHolyFish()

import {useTips} from './tips/TipDataProvider.js'
import {TipList} from './tips/TipLIst.js'

const allTheTips = useTips()

TipList()

import {useLocations} from './locations/LocationDataProvider.js'
import {LocationList} from './locations/LocationList.js'

const allTheLocations = useLocations()

LocationList()