import { Snack } from "./models/snacks.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  snacks = [
    new Snack('cookie', 2.00, 'https://plus.unsplash.com/premium_photo-1667621220861-5f297728dd39?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
    new Snack('chips', 1.50, 'https://plus.unsplash.com/premium_photo-1672753747124-2bd4da9931fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpcHN8ZW58MHx8MHx8fDA%3D'),
    new Snack('candy', 1.00, 'https://images.unsplash.com/photo-1499195333224-3ce974eecb47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVyZHMlMjBjYW5keXxlbnwwfHwwfHx8MA%3D%3D'),
    new Snack('poptart', 3.00, 'https://plus.unsplash.com/premium_photo-1663853494922-32b4fe83e2cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9wdGFydHxlbnwwfHwwfHx8MA%3D%3D'),
    new Snack('edbull', 4.50, 'https://images.unsplash.com/photo-1613218222876-954978a4404e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW5lcmd5JTIwZHJpbmt8ZW58MHx8MHx8fDA%3D'),
    new Snack('fruitbowls', 8.00, 'https://images.unsplash.com/photo-1524182643769-e2f77b41b059?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFjYWklMjBib3dsfGVufDB8fDB8fHww'),
    new Snack('chocolatemilks', 3.50, 'https://plus.unsplash.com/premium_photo-1664647903735-c83b0ad8f1d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlJTIwbWlsa3xlbnwwfHwwfHx8MA%3D%3D'),
    new Snack('peanuts', 2.50, 'https://plus.unsplash.com/premium_photo-1669998296160-fd227fe42efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG51dHMlMjAlMkIlMjBiYWd8ZW58MHx8MHx8fDA%3D')
  ]

  bank = 0

}

export const AppState = createObservableProxy(new ObservableAppState())