class AddPreOrderIdToParaggelia < ActiveRecord::Migration
  def change
    add_column :paraggelia, :pre_order_id, :int
  end
end
