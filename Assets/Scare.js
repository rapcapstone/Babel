var clip : AudioClip;

function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
        AudioSource.PlayClipAtPoint(clip, transform.position);
	}
}