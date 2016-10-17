require 'test_helper'

class ParaggeliaControllerTest < ActionController::TestCase
  setup do
    @paraggelium = paraggelia(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:paraggelia)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create paraggelium" do
    assert_difference('Paraggelium.count') do
      post :create, paraggelium: {  }
    end

    assert_redirected_to paraggelium_path(assigns(:paraggelium))
  end

  test "should show paraggelium" do
    get :show, id: @paraggelium
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @paraggelium
    assert_response :success
  end

  test "should update paraggelium" do
    patch :update, id: @paraggelium, paraggelium: {  }
    assert_redirected_to paraggelium_path(assigns(:paraggelium))
  end

  test "should destroy paraggelium" do
    assert_difference('Paraggelium.count', -1) do
      delete :destroy, id: @paraggelium
    end

    assert_redirected_to paraggelia_path
  end
end
