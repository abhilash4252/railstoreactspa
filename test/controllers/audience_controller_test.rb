require 'test_helper'

class AudienceControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get audience_index_url
    assert_response :success
  end

end
