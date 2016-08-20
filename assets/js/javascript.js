$(document).ready(function() {
  $('.submitError').hide();
  $('.ok').hide();
  $('#mintForm').validate({
    debug: true,
    submitHandler: function(form) {
      $('.submitError').hide();
      $('.ok').show();
      form.submit();
    },
    invalidHandler: function( event, validator ) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        var message = (errors === 1) ? 'highlighted field' : errors + ' highlighted fields';
        $('.submitError').show().find('span').html(message);
      }
    },
    rules: {
      email: {
        required: true,
        email: true
      },
      emailconfirmation: {
        required: true,
        email: true,
        equalTo: '#email'
      },
      password: {
        required: true,
        rangelength: [6, 16]
      },
      passwordconfirmation: {
        required: true,
        equalTo: '#password'
      }
    },
    messages: {
      email: {
        required: 'Please enter an email address',
        email: 'Please enter a valid email address'
      },
      emailconfirmation: {
        equalTo: 'Your email and confirmation email do not match',
        required: 'Please retype your email address',
        email: 'Please enter a valid email address'
      },
      password: {
        required: 'A password is required',
        rangelength: 'Your password must be between 6 - 16 characters long'
      },
      passwordconfirmation: {
        required: 'Please retype your password',
        equalTo: 'Your password and confirmation password do not match'
      }
    }
  });
});
