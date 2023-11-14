# zenCSS v1.0.0 (https://zencss.com/)
#Copyright 2023-2023 Shaun Mackey
#Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)

import os
import xml.etree.ElementTree as ET

def generate_sitemap(start_path):
    urlset = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    for root, dirs, files in os.walk(start_path):
        for file in files:
            if file.endswith('.html'):
                url = ET.SubElement(urlset, "url")
                loc = ET.SubElement(url, "loc")
                file_path = os.path.join(root, file)
                # Replace http://yourwebsite.com/ with your actual website
                loc.text = "http://yourwebsite.com/" + os.path.relpath(file_path, start_path).replace('\\', '/')
                
    tree = ET.ElementTree(urlset)
    tree.write("sitemap.xml", encoding='utf-8', xml_declaration=True)

# Replacewith your actual folder path
generate_sitemap('website')
