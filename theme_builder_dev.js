// SWG UI Color Theme Builder - By Tatwi
// Begun 2013.01.01
// This script takes the color values from the form and builds them into the format the SWG UI expects to see them. 
// It also generates a basic preview on the right side of the screen.

var colorCodes = new Array(); // This array hold all the variables for color data and SWGEmu UI field names.

function startUp(){
	// Load the default theme
	templateLoader(preloadedThemes[0]);
	
	// Populate theme selection list
	var select = document.getElementById("themeMenu"); 
	var numOfThemes = preloadedThemes.length;
	var opt = "";
	var el = "";

	for (i = 0; i < numOfThemes; i++) {
		opt = getPaletteName(preloadedThemes[i]);
		opt = opt.replace(/Name,/g,"");
		opt = opt.replace(/,/, "");
		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}
}

function templateLoader(theme){
	if (!theme){
		alert("Error: Theme data was not found.");
		return;
	}
	
	// Clear fields before use.
	clearField('myTheme');
	clearField('themeSaver');
	clearField('userLoad');
	
	// Make the one long string variable loadTheme into an array of variables, by splitting them as comma seperated values.
		// NOTE: Zero is the word Name and 1 is the name of the theme.
		// NOTE: Positive numbers are the item names, while odd numbers are the color codes.
	colorCodes = theme.split(',');
  	
	// Output Section Begins  	
  	
	//	Set the title of the theme.
	document.getElementById('themeName').value = colorCodes[1];
	
	// Load the variables into the table of color code pickers.	
	// Starts at 2 because the theme name take the first two spots.
	// Uses the names stored in the even numbers of the array to find the correct html id, then tells jscolor to update the color value with the odd number in the array, which are the theme's color values.
	for (var i=2;i<colorCodes.length;i++)
	{
		changeColor = i +1; // i is the html id name, changeColor is the value of the color.
			
		if (i % 2 == 0)
			{
				document.getElementById(colorCodes[i]).color.fromString(colorCodes[changeColor]);
			}
	}
}


function magicBuild(form)
{
	/* Update the array with the user selected color changes.
		Steps for this section:
			1. Start the loop counting at the colorCodes array position 2, because we don't want to use the Name,Theme Name entries.
			2. Check to make sure the counter, i, is an even number.
			3. Use the counter number to pull the correct item name out of the colorCodes array.
			4. Use that item name to get the VALUE (which is an html color code that user selected) of the corresponding element id.
			5. Make a variable(placeUserNumb) that is one more than counter.
			7. Update the colorCodes array with the user selected color codes.
			8. Repeat loop until all of the values in the array have been updated.
			9. Move on to the next section, where the updated data in the colorCodes array is formated for the user to use.
	*/	
	for (var i=2;i<colorCodes.length;i++)
	{
		 if (i % 2 == 0)
			{
				var userNumb = document.getElementById(colorCodes[i]).value;
				var placeUserNumb = i + 1;
				//alert(placeUserNumb + " Should be 1 more than " + i);
				colorCodes[placeUserNumb] = userNumb; 
			} 
	}

	// Output Section Begins  	

	//	Set the title of the theme.
	var userThemeName = document.getElementById('themeName').value;
	colorCodes[1] = userThemeName;


	// Print out the colors from the array into the format the game expects.
	var themeOutput = "";

	themeOutput ="<Palette\n";	
	for (var i=2;i<colorCodes.length;i++)
	{
		if (i=="224"){
			themeOutput += "Name='" + colorCodes[1] + "'\n";
			themeOutput += "notcolor_ZoneAsteroid1='111'\n";
			themeOutput += "notcolor_ZoneAsteroid2='111'\n";
			themeOutput += "notcolor_ZoneDefault1='111'\n";
			themeOutput += "notcolor_ZoneDefault2='111'\n";
			themeOutput += "notcolor_ZoneHyperspace1='111'\n";
			themeOutput += "notcolor_ZoneHyperspace2='111'\n";
			themeOutput += "notcolor_ZoneMissionCritical1='111'\n";
			themeOutput += "notcolor_ZoneMissionCritical2='111'\n";
			themeOutput += "notcolor_ZoneSelect1='111'\n";
			themeOutput += "notcolor_ZoneSelect2='111'\n";
			themeOutput += "notcolor_ZoneShip1='111'\n";
			themeOutput += "notcolor_ZoneShip2='111'\n";
			themeOutput += "notcolor_ZoneSpaceStation1='111'\n";
			themeOutput += "notcolor_ZoneSpaceStation2='111'\n";
			themeOutput += "notcolor_ZoneWapointPoiActive2='111'\n";
			themeOutput += "notcolor_ZoneWaypointActive1='111'\n";
			themeOutput += "notcolor_ZoneWaypointActive2='111'\n";
			themeOutput += "notcolor_ZoneWaypointInactive1='111'\n";
			themeOutput += "notcolor_ZoneWaypointInactive2='111'\n";
			themeOutput += "notcolor_ZoneWaypointPoiActive1='111'\n";
			themeOutput += "notcolor_ZoneWaypointPoiInactive1='111'\n";
			themeOutput += "notcolor_ZoneWaypointPoiInactive2='111'\n";
		}
	themeOutput += colorCodes[i] + "='#";
		i++;
	themeOutput += colorCodes[i] + "'\n";
	}
	themeOutput +="/>";
	
	// Print out the variables so they can be saved and loaded in again later.
	var varOutput = ""; // Clear field before use.

	for (var i=0;i<colorCodes.length;i++)
	{
		varOutput += colorCodes[i];
		if (i!="387"){
			varOutput += ",";
		}
	}
	
	// Clear fields
	clearField('myTheme');
	clearField('themeSaver');
	
	// Output results
	document.getElementById('myTheme').value = themeOutput;
	document.getElementById('themeSaver').value = varOutput;
}	



function toggle(it) {
	// This function toggles the size of the pictures in the title bar of the page. It's not really useful at this time.
  if (it.width == 60)
    {it.width = 600;}
  else
    {it.width = 60;}
}

// Convert a default SWG xml color palette into variables that can be used with this tool.
function parsePalette(palette){
	if (palette.indexOf("<Palette") < 0){
		alert("Error: Invalid SWG palette.");
		return;
	}
	
	// Remove white space and tabs
	palette = palette.trim();
	palette = palette.replace(/\t/g, "");
	
	// Make comma separated
	palette = palette.replace("<Palette", "");
	palette = palette.replace("/>", "");
	palette = palette.replace(/='#/g, ",");
	palette = palette.replace("='", ",");
	palette = palette.replace(/'/g, ",");
	
	// Get palette name
	var palName = getPaletteName(palette);
	//var namePos = palette.search("Name,");
	//var palName = palette.slice(namePos);
    //var nameEndPos = palette.search("notcolor_ZoneAsteroid1");
	//palName = palette.substring(namePos, nameEndPos);
	
	// Remove palette name
	palette = palette.replace(palName, "");
	
	// Remove unused values
	palette = palette.replace(/^.*notcolor.*$/mg, "");
	
	// Put palette name back at the start
	var retValue = palName + palette;
 
 	// Remove new lines
    retValue = retValue.replace(/\n/g, "");
    
    // Remove trailing comma
    retValue = retValue.replace(/,\s*$/, "");
	
	return retValue;
}

function processXML(vars){
	var output = parsePalette(vars)
	
	// Load theme into editor
	templateLoader(output);
	
	// Output theme to Save Variable box
	document.getElementById('themeSaver').value = output;
}

function clearField(field) {
    document.getElementById(field).value = "";
}

function getPaletteName(palette){
	var namePos = palette.search("Name,");
	var palName = palette.slice(namePos);
    var nameEndPos = palette.search("notcolor_ZoneAsteroid1");
    
    // For when we're using the variable string rather than the XML
    if (palette.indexOf("notcolor_ZoneAsteroid1") < 0){
		nameEndPos = palette.search("AccentDark");
	}
	
	palName = palette.substring(namePos, nameEndPos);
	
	return	palName;
}
