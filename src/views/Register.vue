<template>
  <v-container>
    <v-row class="justify-center mt-10" align="center">
      <v-card style="width: 600px">
        <v-img
          src="@/assets/login_header.jpg"
          height="300px"
          class="white--text align-end"
        >
          <v-card-title primary-title> Register </v-card-title>
        </v-img>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <!-- Username -->
            <v-text-field
              name="username"
              label="Username"
              id="username"
              v-model="account.username"
              v-bind:rules="usernameRules"
            ></v-text-field>

            <!-- Password -->
            <v-text-field
              name="password"
              label="Password"
              id="password"
              v-bind:rules="passwordRules"
              v-model="account.password"
              :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
              @click:append="isShowPassword = !isShowPassword"
              :type="isShowPassword ? 'text' : 'password'"
              counter
            ></v-text-field>

            <span>{{ account }}</span>
            <v-row class="justify-space-between col-12">
              <v-btn text @click.prevent="$router.back()">Cancel</v-btn>
              <v-btn color="success" type="submit">Confirm</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "Login",
      isShowPassword: false,
      account: {
        username: "",
        password: "",
      },
      usernameRules: [(v1) => !!v1 || "Username is required"],
      passwordRules: [
        (v1) => !!v1 || "Password is required",
        (v2) =>
          !!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v2) ||
          "Minimum eight characters, at least one letter and one number",
      ],
    };
  },
  methods: {
    submit() {
      alert(JSON.stringify(this.account));
    },
  },
};
</script>

<style></style>
