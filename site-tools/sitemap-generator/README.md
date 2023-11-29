# zenCSS Sitemap Generator 

This README provides instructions on how to set up and use the zenCSS Sitemap Generator tool to generate a sitemap for a local website. The script scans a specified directory for HTML files and generates a sitemap in XML format that is compatible with Google's requirements.

## Prerequisites

- Python 3.x installed on your system
- Basic familiarity with running Python scripts and using the command line
- Files are in .html format

## Installation

1. **Ensure Python is Installed**:
   - Verify Python installation by running `python3 --version` in your terminal. You should see the Python version number if it's installed correctly.

2. **Download the Script**:
   - Download or create the `sitemap_generator.py` script in a directory of your choice.

## Usage

1. **Modify the Script**:
   - Open the script in a text editor.
   - Replace `http://yourwebsite.com/` with your actual website's URL.
   - Update the path in `generate_sitemap('/path/to/your/local/site')` to the path where your website files are located.

2. **Run the Script**:
   - Open a terminal and navigate to the directory containing your script.
   - Run the script using Python 3 with the command:
     ```
     python3 sitemap_generator.py
     ```

3. **Check the Output**:
   - The script will generate a file named `sitemap.xml` in the same directory.
   - Verify that the `sitemap.xml` file contains the correct URLs of your website.
   - Optional. Validate your sitemap at https://www.xml-sitemaps.com/validate-xml-sitemap.html


4. ## Troubleshooting
-Python Not Found: Make sure Python is correctly installed and added to your system PATH.
-Script Errors: Ensure the path to your website files is correct and that the script has permission to read from the directory and write to the current directory.

5. ## Contributing
Feel free to fork this project and submit pull requests with any enhancements. For major changes, please open an issue first to discuss what you would like to change.