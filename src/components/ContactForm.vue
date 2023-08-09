<template>
    <form @submit.prevent="submitForm()" class="flex-grow-1 form-container flex-col justify-center align-start">

            <h1>CONTACT</h1>
            
            <div class="form-input-slide elevation-2">
                <input 
                type="email"
                id="emailContact" 
                aria-describedby="emailHelp" 
                placeholder="email@domain.com" 
                minlength="5" 
                maxlength="50"
                v-model="editable.email"
                required
                >
                <label for="emailContact">Return Email</label>
            </div>
            <small id="emailHelp">I'll never share your email with anyone else.</small>
        
            <div class="form-input-slide elevation-2">
                <input 
                type="text" 
                id="nameContact" 
                placeholder="name" 
                minlength="4" 
                maxlength="40"
                v-model="editable.name"
                required
                >
                <label for="nameContact">Name/Company</label>
            </div>
        
            <div class="form-input-slide flex-grow-1 elevation-2">
                <textarea 
                class="contact-body" 
                id="bodyContact" 
                placeholder="message"
                maxlength="3000" 
                minlength="5"
                v-model="editable.body"
                required
                ></textarea>
                <label for="bodyContact">Message</label>
            </div>

            <button 
            type="submit"
            class="submit-button elevation-2">Submit</button>

    </form>
</template>
  
<script>
import { ref } from 'vue'
import { logger } from '../utils/Logger'
import { contactService } from '../services/ContactService'
  export default {
    setup() {
        const editable = ref({})
      return {
        editable,
        submitForm(){
            try {
                contactService.submitContactForm(editable.value)
            } catch (error) {
                logger.log(error)
            }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
h1{
    font-size: 5.5rem;
    margin: 0 0 4rem 0;
    line-height: 1;
}
form{
    position: relative;
}
.form-container{
    min-width: 250px;
    width: 100%;
    max-width: 900px;
    padding: $navpad 1rem;
}

textarea{
    flex-grow: 1;
    resize: none;
    overflow-y: auto;
}
.flex-grow-1{
    flex-grow: 1;
}
</style>