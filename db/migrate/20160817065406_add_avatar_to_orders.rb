class AddAvatarToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :avatar, :string
  end
end
