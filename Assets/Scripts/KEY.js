var TheKey : GameObject;

private var playerNextToKey = false;

public var guiSkin : GUISkin;

function Update () 
{
 	if (Input.GetKeyDown(KeyCode.E) && playerNextToKey == true)
	{
	TheKey.active = false;
	}
}

function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		playerNextToKey = true;
	}
}

function OnTriggerExit (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		playerNextToKey = false;
	}
}

function OnGUI ()
{
	if(playerNextToKey == true)
	{
		GUI.skin = guiSkin;
		GUI.Label (Rect (Screen.width/2-50, Screen.height/2-55, 120, 50), "Press E to pick up the key.");
	
	}

}