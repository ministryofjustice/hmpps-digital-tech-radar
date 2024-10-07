#!/bin/bash

# Define the paths to the CSV and markdown template
csv_file="tech-radar-data.csv"

# Check if the CSV file exists
if [[ ! -f "$csv_file" ]]; then
    echo "CSV file not found!"
    exit 1
fi

# Read the CSV file line by line (ignoring the header)
tail -n +2 "$csv_file" | while IFS=',' read -r name quadrant ring updown description
do
    # Create a markdown file with the content of each row
    markdown_file="${name// /_}.md"
    
    # Write the content to the markdown file following the demo-1.md format
    cat <<EOL > "$markdown_file"
---
title: "$name"
quadrant: "$quadrant"
ring: "$ring"
tags: [hmpps]
---

$description
EOL

    echo "Generated $markdown_file"
    
done

echo "All markdown files generated successfully."
