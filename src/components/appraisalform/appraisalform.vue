<template>
  <section class="appraisal-form row">
    <div class="appraisal row">
      <div class="hero">
        <div
          class="image-container"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <img
            src="https://cdn-eae.need-clients.com/Dark%20Hourglass.jpg"
            alt="Elite Auto Estimates Save Time Book a Call"
          />
        </div>
      </div>
      <div
        class="form-container col"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <h1>Get clarity in minutes</h1>
        <p>Book a call and receive expert guidance on your vehicle estimate</p>

        <Form
          v-slot="$form"
          :initialValues="initialValues"
          :resolver="resolver"
          @submit="updateCategory"
          :validateOnValueUpdate="false"
          :validateOnBlur="true"
          class="form col-10"
        >
          <Message
            v-if="error"
            severity="error"
            size="small"
            variant="simple"
            >{{ error }}</Message
          >
          <div class="input-container col-5">
            <IftaLabel>
              <InputText id="first_name" name="first_name" />
              <label for="first_name">First Name</label>
            </IftaLabel>
            <Message
              v-if="$form.first_name?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $form.first_name.error?.message }}</Message
            >
          </div>
          <div class="input-container col-5">
            <IftaLabel>
              <InputText id="last_name" name="last_name" />
              <label for="last_name">Last Name</label>
            </IftaLabel>
            <Message
              v-if="$form.last_name?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $form.last_name.error?.message }}</Message
            >
          </div>
          <div class="input-container col-5">
            <IftaLabel>
              <InputText id="email" name="email" />
              <label for="email">Email</label>
            </IftaLabel>
            <Message
              v-if="$form.email?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $form.email.error?.message }}</Message
            >
          </div>
          <div class="input-container col-5">
            <IftaLabel>
              <InputText id="contact_number" name="contact_number" />
              <label for="contact_number">Phone Number</label>
            </IftaLabel>
            <Message
              v-if="$form.contact_number?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $form.contact_number.error?.message }}</Message
            >
          </div>
          <Button label="SUBMIT" />
        </Form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
