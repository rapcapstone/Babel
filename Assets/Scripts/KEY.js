var TheKey : GameObject;
var sound : AudioClip;

private var playerNextToKey = false;

public var guiSkin : GUISkin;

function Update () 
{
 	if (Input.GetKeyDown(KeyCode.E) && playerNextToKey == true)
	{
		TheKey.active = false;
        AudioSource.PlayClipAtPoint(sound, GetComponent.<Collider>().transform.position);

	}
}

function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		playerNextToKey = true;
		Debug.log("Enter.");
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
		GUI.Label (Rect (Screen.width/2-100, (Screen.height/2)+175, 200, 50), "Press <b>E</b> to pick up <b>key</b>");
	
	}

}