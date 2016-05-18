var animation : AnimationClip;
var Portrait : GameObject;

private var InRange = false;
private var Activated = false;

public var guiSkin : GUISkin;

function Update () 
{
    //Checks if portrait animation has been played.
    if (Activated == false){
        if (Input.GetKeyDown(KeyCode.E) && InRange == true)
        {
            //Event when activated.
            Portrait.GetComponent.<Animation>().Play("AnimatePortrait");
            Activated = true;
        }
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
	if (InRange == true && Activated == false)
	{
		GUI.skin = guiSkin;
		GUI.Label (Rect (Screen.width/2-100, (Screen.height/2)+175, 200, 50), "Press <b>E</b> to examine the portrait");
	
	}

}