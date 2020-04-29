json.categories @categories.each do |category|
    json.id category.id
    json.name category.name
    json.image url_for(category.image)
end