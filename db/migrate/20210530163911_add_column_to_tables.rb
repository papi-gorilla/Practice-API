class AddColumnToTables < ActiveRecord::Migration[5.2]
  def change
    add_column :starts, :plan_id, :integer
    add_column :goals, :plan_id, :integer

    add_column :waypoints, :plan_id, :integer
    add_column :waypoints, :point1, :string
    add_column :waypoints, :point2, :string
    add_column :waypoints, :point3, :string
    add_column :waypoints, :point4, :string
    add_column :waypoints, :point5, :string
    add_column :waypoints, :point6, :string
    add_column :waypoints, :point7, :string
    add_column :waypoints, :point8, :string
  end
end
