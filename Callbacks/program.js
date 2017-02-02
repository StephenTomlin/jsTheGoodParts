request = prepare_the_request();
send_request_synchonously(request, function (response) {
  display(response)
});