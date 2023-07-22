<template>
<section>
    <base-card>
    <h2>Register as a coach now</h2>
    <coach-form @save-data="saveData"></coach-form>
    </base-card>
</section>
</template>
<script>
import CoachForm from "../../components/coaches/CoachForm.vue";

export default {
    components : {
        CoachForm
    },
    methods:{
        saveData(data) {
            this.$store.dispatch('coaches/registerCoach', data);
            // this.$router.push('/coaches'); //push will go back to registration page again and again.
            this.$router.replace('/coaches'); //replace wont go to register page again if we go back again
        }
    }
}
</script>
<style>

</style>