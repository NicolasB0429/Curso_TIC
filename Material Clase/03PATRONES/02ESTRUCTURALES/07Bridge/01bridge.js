function TV() {
    
   this.increaseVolume = function() {
       // incrementa el volumen
   }

   this.decreaseVolume = function() {
       // decrementa el volumen
   }

   this.mute = function() {
       // enmudece el volumen
   }
}

function Speaker() {

   this.increaseVolume = function() {
       // incrementa el volumen
   }

   this.decreaseVolume = function() {
       // decrementa el volumen
   }

   this.mute() = function() {
       // enmudece el volumen
   }
}

function SimpleRemote(device) {

   this.pressVolumeDownKey = function() {
       device.decreaseVolume()
   }

   this.pressVolumeUpKey = function() {
       device.increaseVolume()
   }
}

function AdvancedRemote(device) {

   this.pressVolumeDownKey = function() {
       device.decreaseVolume()
   }

   this.pressVolumeUpKey = function() {
       device.increaseVolume()
   }

   this.pressMuteKey = function() {
       device.mute()
   }
}

function run() {

   let tv = new TV()
   let speaker = new Speaker()

   let tvSimpleRemote = new SimpleRemote(tv)
   let tvAdvancedRemote = new AdvancedRemote(tv)

   let speakerSimpleRemote = new SimpleRemote(speaker)
   let speakerAdvancedRemote = new AdvancedRemote(speaker)
   
   tvSimpleRemote.pressVolumeDownKey()
   tvAdvancedRemote.pressVolumeDownKey()

   tvSimpleRemote.pressVolumeUpKey()
   tvAdvancedRemote.pressVolumeUpKey()

   tvAdvancedRemote.pressMuteKey()

   speakerSimpleRemote.pressVolumeDownKey()
   speakerAdvancedRemote.pressVolumeDownKey()

   speakerSimpleRemote.pressVolumeUpKey()
   speakerAdvancedRemote.pressVolumeUpKey()

   speakerAdvancedRemote.pressMuteKey()
}

console.log('Ampliando el patrón Adapter, el patrón de diseño Bridge proporciona tanto a la clase como al cliente interfaces'+
'independientes para que ambos puedan funcionar incluso en casos de interfaces nativas incompatibles.' +
'Ayuda a desarrollar una interfaz muy poco acoplada entre los dos tipos de objetos. También ayuda a mejorar la extensibilidad'+
'de las interfaces y sus implementaciones para obtener la máxima flexibilidad.')
