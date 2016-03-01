var Lamp : GameObject;
var PlayerLamp : GameObject;

private var InRange = false;

public var guiSkin : GUISkin;

function Start () {
    PlayerLamp.active = false;
}

function Update () {
    if (Input.GetKeyDown(KeyCode.E) && InRange == true)
	{
        Lamp.active = false;
        PlayerLamp.active = true;
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
	if(InRange == true)
	{
		GUI.skin = guiSkin;
		GUI.Label (Rect (Screen.width/2-50, Screen.height/2-55, 120, 50), "Press E to pick up the lamp");
	
	}

}