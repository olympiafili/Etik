class AddMWindowStillToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :m_window_still, :string
  end
end
