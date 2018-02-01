class CreatePercentageSales < ActiveRecord::Migration
  def change
    create_table :percentage_sales do |t|
      t.integer :dealer_id
      t.integer :line_id
      t.float :percentage

      t.timestamps
    end
  end
end
