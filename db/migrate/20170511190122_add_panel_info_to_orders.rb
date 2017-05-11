class AddPanelInfoToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :panel_info, :text
  end
end
