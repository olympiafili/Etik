class AddTzami0ToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :tzamia0, :string
    add_column :orders, :tm_p_tzami0, :float
    add_column :orders, :tm_u_tzami0, :float
    add_column :orders, :timi_m_tzami0, :float
    add_column :orders, :price_tzamiou0, :float
  end
end
