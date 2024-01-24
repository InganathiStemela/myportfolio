import { createStore } from 'vuex'
const dataUrl = "https://inganathistemela.github.io/VueData/Data/"
export default createStore({
  state: {
    Testimonials : null,
    skills : null,
    experience : null,
    Educations: null,
    Projects: null,
  },
  getters: {
  },
  mutations: {
    setTestimonials(state, Testimonials) {
      state.Testimonials = Testimonials
    },
    setSkills(state, skills) {
      state.skills = skills
    },
    setExperience(state, experience) {
      state.experience = experience
    },
    setEducations(state, Educations) {
      state.Educations = Educations
    },
    setProjects(state, Projects) {
      state.Projects = Projects
    },

  },
  actions: {
    async fetchTestimonials(context) {
      try {
        let testimonialResponse = await fetch(dataUrl)
        let { Testimonials } = await testimonialResponse.json()
        context.commit('setTestimonials', Testimonials)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchProjects(context) {
      try {
        let projectsResponse = await fetch(dataUrl)
        let { Projects } = await projectsResponse.json()
        context.commit('setProjects', Projects)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchEducations(context) {
      try {
        let EducationsResponse = await fetch(dataUrl)
        let { Educations } = await EducationsResponse.json()
        context.commit('setEducations', Educations)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchSkills(context) {
      try {
        let skillsResponse = await fetch(dataUrl)
        let { Skills } = await skillsResponse.json()
        context.commit('setSkills', Skills)
      } catch (error) {
        console.error(error)
      }
    },
  },
  
  modules: {
  }
})