#!/bin/bash
link_to_data="../src/components/Homepage/Messages/MessageItems/Announcements/data.json"
link_to_page="../announcements/"


# Prompt the user for input
read -p "add slug: " slug

read -p "add title: " title

read -p "add author name: " author

read -p "add author title: " author_title

read -p "add author url: " author_url

read -p "add author image: " img_url

read -p "add tags (separate each tag with ','): " tags

read -p "add text: " snippet

# Get the current date
date=$(date +"%Y-%m-%d")

# Create a JSON structure with the user input
new_blog_entry="{
  \"title\": \"$title\",
  \"content\": \"$snippet\",
  \"date\": \"$date\",
  \"link\": \"$link\"
}"




MD_structure="---
slug: $slug
title: $title
author: $author
author_title: $author_title
author_url: $author_url
author_image_url: $img_url
tags: [$tags]
---

<snippet>
$snippet
</snippet>
"




# Read the existing JSON content from data.json
existing_json=$(cat $link_to_data)

# Add the new blog entry to the Blogs section
updated_json=$(jq ".Blogs += { \"$date-$title\": $new_blog_entry }" <<< "$existing_json")

# Write the updated JSON data back to the data.json file
echo $link_to_data
echo "$updated_json" > $link_to_data


# Write the content to a new Markdown file
new_md_file="$link_to_page/$date-$title.md"
echo "$MD_structure" > "$new_md_file"

echo "Markdown file '$new_md_file' has been created with the new blog entry content."