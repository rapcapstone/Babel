﻿public var guiSkin : GUISkin;
var text : String;

private var InRange;
private var Show = false;

function Update() {
	if(InRange == true){
		Show = true;
	}
	else if(InRange == false){
		Show = false;
	}
}

function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		InRange = true;
	}
}

function OnTriggerExit (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		InRange = false;
	}
}

function OnGUI ()
{
	if(Show == true)
	{
		GUI.skin = guiSkin;
		GUI.Label (Rect (Screen.width/2-100, (Screen.height/2)+175, 200, 50), text);
	
	}
}