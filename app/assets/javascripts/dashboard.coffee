jQuery(document).ready ->
  $('body').css("background", "#f2f2f2");

  # Dashbaord 모바일 최적화
  if $(window).width() <= 780
    currentPage = $('#action_name').val()
    $('#' + "mob-" + currentPage).hide()
    $('#only_mobile').removeAttr('href').css 'cursor', 'pointer'
    if $('#controller_name').val() == 'shows'
      $('#mob-manage').hide()
  else
    $('#only_mobile').hide()

  # Dashboard 현재 페이지 피드백
  if $(controller_name).val() == "dashboard"
      page = $(action_name).val()
      $('.ui.borderless.menu').ready ->
        $('#' + 'mob' + '-' + page).addClass 'active'
        return
      return
  else
