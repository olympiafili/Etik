class ChangePriceWindowStillForOrders < ActiveRecord::Migration
  def change
  	change_column :orders, :price_window_still, :string
  end
end
