class CreateEksoterikas < ActiveRecord::Migration
  def change
    create_table :eksoterikas do |t|
      t.string :name

      t.timestamps
    end
  end
end
