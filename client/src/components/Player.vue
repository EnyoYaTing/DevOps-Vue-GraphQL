<template>
<div>
  <!-- image & text -->
  <div class="container">
    <img :src="image" alt="Snow" style="width:100%;">
  </div>

  <h1 class="top-right_1">{{messege}}</h1>

  <div class="row">
    <div class="col-sm-2"></div>
    <div class="player col-sm-8">
      <b-card-group deck>
        <b-card title="Kepa Arrizabalaga" :img-src="kepaImg" img-alt="Image" img-top>
          <div class="infomation" v-for="(value, key) in object">
            {{ key }}: {{ value }}
          </div>
          <div slot="footer"><small class="text-muted">Goalkeeper</small></div>
        </b-card>

        <b-card title="Antonio Rudiger" :img-src="antonioImg" img-alt="Image" img-top>
          <div class="infomation" v-for="(value, key) in object1">
            {{ key }}: {{ value }}
          </div>
          <div slot="footer"><small class="text-muted">Defender</small></div>
        </b-card>

        <b-card title="David Luiz Moreira Marinho" :img-src="davidImg" img-alt="Image" img-top>
          <div class="infomation" v-for="(value, key) in object2">
            {{ key }}: {{ value }}
          </div>
          <div slot="footer"><small class="text-muted">Defender</small></div>
        </b-card>
      </b-card-group>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-2"></div>
    <div class="player col-sm-8">
      <b-card-group deck>
        <b-card title="Cesar Azpilicueta" :img-src="cesarImg" img-alt="Image" img-top>
          <div class="infomation" v-for="(value, key) in object3">
            {{ key }}: {{ value }}
          </div>
          <div slot="footer"><small class="text-muted">Defender</small></div>
        </b-card>

        <b-card title="Marcos Alonso" :img-src="marcosImg" img-alt="Image" img-top>
          <div class="infomation" v-for="(value, key) in object4">
            {{ key }}: {{ value }}
          </div>
          <div slot="footer"><small class="text-muted">Defender</small></div>
        </b-card>

        <b-card title="Jorge Luiz Frello Filho" :img-src="jorginhoImg" img-alt="Image" img-top>
          <div class="infomation" v-for="(value, key) in object5">
            {{ key }}: {{ value }}
          </div>
          <div slot="footer"><small class="text-muted">Midfielder</small></div>
        </b-card>
      </b-card-group>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-2"></div>
    <div class="player col-sm-8">
      <b-card-group deck>
        <b-card title="Mateo Kovacic" :img-src="mateoImg" img-alt="Image" img-top>
          <div class="infomation" v-for="(value, key) in object6">
            {{ key }}: {{ value }}
          </div>
          <div slot="footer"><small class="text-muted">Midfielder</small></div>
        </b-card>

        <b-card title="N'Golo Kante" :img-src="ngoloImg" img-alt="Image" img-top>
          <div class="infomation" v-for="(value, key) in object7">
            {{ key }}: {{ value }}
          </div>
          <div slot="footer"><small class="text-muted">Midfielder</small></div>
        </b-card>

        <b-card title="Eden Hazard" :img-src="edenImg" img-alt="Image" img-top>
          <div class="infomation" v-for="(value, key) in object8">
            {{ key }}: {{ value }}
          </div>
          <div slot="footer"><small class="text-muted">Forwards</small></div>
        </b-card>
      </b-card-group>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-2"></div>
    <div class="player col-sm-8">
      <b-card-group deck>
        <b-card title="Pedro" :img-src="pedroImg" img-alt="Image" img-top>
          <div class="infomation" v-for="(value, key) in object9">
            {{ key }}: {{ value }}
          </div>
          <div slot="footer"><small class="text-muted">Forwards</small></div>
        </b-card>

        <b-card title="Willian Borges da Silva" :img-src="willianImg" img-alt="Image" img-top>
          <div class="infomation" v-for="(value, key) in object10">
            {{ key }}: {{ value }}
          </div>
          <div slot="footer"><small class="text-muted">Forwards</small></div>
        </b-card>

        <b-card title="Callum Hudson-Odoi" :img-src="callumImg" img-alt="Image" img-top>
          <div class="infomation" v-for="(value, key) in object11">
            {{ key }}: {{ value }}
          </div>
          <div slot="footer"><small class="text-muted">Forwards</small></div>
        </b-card>
      </b-card-group>
    </div>
  </div>

</div>
</template>

<script>
import image from '@/assets/player/chelsea.png'

export default {
  name: 'player',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      image: image,
      messege:'Chelsea Players Information',
      kepaImg: require('@/assets/player/kepa.jpeg'),
      antonioImg: require('@/assets/player/antonio.jpeg'),
      davidImg: require('@/assets/player/david.jpeg'),
      cesarImg: require('@/assets/player/cesar.jpeg'),
      marcosImg: require('@/assets/player/marcos.jpeg'),
      jorginhoImg: require('@/assets/player/jorginho.jpeg'),
      mateoImg: require('@/assets/player/mateo.jpeg'),
      ngoloImg: require('@/assets/player/ngolo.jpeg'),
      edenImg: require('@/assets/player/eden.jpeg'),
      pedroImg: require('@/assets/player/pedro.jpeg'),
      willianImg: require('@/assets/player/willian.jpeg'),
      callumImg: require('@/assets/player/callum.jpeg'),
      object: {
        Birthday: 'October 3, 1994',
        Birthplace: 'Ondarroa, Spain',
        age: 24,
        Height: '1.86m (6 ft 1 in)',
        Weight: '85 kg',
        Number: 1
      },
      object1: {
        Birthday: 'March 3, 1993',
        Birthplace: 'Berlin, Germany',
        age: 26,
        Height: '1.90m (6 ft 3 in)',
        Weight: '85 kg',
        Number: 2
      },
      object2: {
        Birthday: 'April 22, 1987',
        Birthplace: 'Diadema, Brazil',
        age: 31,
        Height: '1.89m (6 ft 2 in)',
        Weight: '86 kg',
        Number: 30
      },
      object3: {
        Birthday: 'August 28, 1989',
        Birthplace: 'Pamplona, Spain',
        age: 29,
        Height: '1.78m (5 ft 10 in)',
        Weight: '76 kg',
        Number: 28
      },
      object4: {
        Birthday: 'December 28, 1990',
        Birthplace: 'Madrid, Spain',
        age: 28,
        Height: '1.88m (6 ft 2 in)',
        Weight: '87 kg',
        Number: 3
      },
      object5: {
        Birthday: 'December 20, 1991',
        Birthplace: 'Imbituba, Brazil',
        age: 27,
        Height: '1.80m (5 ft 11 in)',
        Weight: '76 kg',
        Number: 5
      },
      object6: {
        Birthday: 'May 6, 1995',
        Birthplace: 'Linz, Austria',
        age: 23,
        Height: '1.76m (5 ft 9 in)',
        Weight: '78 kg',
        Number: 17
      },
      object7: {
        Birthday: 'March 29, 1991',
        Birthplace: 'Paris, France',
        age: 28,
        Height: '1.68m (5 ft 6 in)',
        Weight: '71.5 kg',
        Number: 7
      },
      object8: {
        Birthday: 'January 7, 1991',
        Birthplace: 'La Louvière, Belgium',
        age: 28,
        Height: '1.73m (5 ft 8 in)',
        Weight: '76 kg',
        Number: 10
      },
      object9: {
        Birthday: 'July 27, 1987',
        Birthplace: 'Santa Cruz de Tenerife, Spain',
        age: 31,
        Height: '1.69m (5 ft 7 in)',
        Weight: '65 kg',
        Number: 11
      },
      object10: {
        Birthday: 'August 9, 1988',
        Birthplace: 'Ribeirao Pires, Brazil',
        age: 30,
        Height: '1.75m (5 ft 9 in)',
        Weight: '77.5 kg',
        Number: 22
      },
      object11: {
        Birthday: 'November 7, 2000',
        Birthplace: 'London, England',
        age: 18,
        Height: '1.77m (5 ft 10 in)',
        Weight: '74.5 kg',
        Number: 20
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Bevan|Kalam|Paytone+One&display=swap&subset=latin-ext,vietnamese');

h1 {
  margin: 50px;
  font-weight: solid;
  font-family: 'Paytone One', sans-serif;
  font-size: 500%;
}

.infomation {
    position: relative;
    left: 15px;
    text-align: left;

}

.player {
  padding: 50px;
}

</style>
