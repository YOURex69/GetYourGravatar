$(document).ready(function()
	{
		$('#button1').click(function()
			{
				var name=$('#name_id').val();
				$('#img_id').attr('src',`https://joeschmoe.io/api/v1/${name}`);
               $('#name_id').val('');
               $('#email_id').val('');

			});
		$('#button2').click(function(){
			location.reload();
		});
	});