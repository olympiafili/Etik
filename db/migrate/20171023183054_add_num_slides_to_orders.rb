class AddNumSlidesToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :num_slides, :float
  end
end
