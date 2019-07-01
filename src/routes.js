import Landing from './components/Landing.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Service from './components/Service.vue'
import Service2 from './components/Service2.vue'
import Service3 from './components/Service3.vue'
import Web from './components/Web.vue'
import Mobile from './components/Mobile.vue'
import Game from './components/Game.vue'

export default[
	{path: '/', component:Landing},
	{path: '/contact', component:Contact},
	{path: '/about', component:About},
	{path: '/portfolio', component:Portfolio},
	{path: '/service', component:Service},
	{path: '/service2', component:Service2},
	{path: '/service3', component:Service3},
	{path: '/web', component:Web},
	{path: '/mobile', component:Mobile},
	{path: '/game', component:Game}
]