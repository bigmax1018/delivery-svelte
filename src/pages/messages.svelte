
<div class="page">

	<div class="navbar navbar-style-1">
		<div class="navbar-inner">
			<a href="#" class="link back">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.439312 13.0606L5.75391 18.3752C6.04683 18.6682 6.43069 18.8146 6.81459 18.8146C7.1985 18.8146 7.58236 18.6682 7.87528 18.3752C8.46103 17.7894 8.46103 16.8397 7.87528 16.2539L5.12133 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5H5.12133L7.87528 7.7461C8.46103 7.1603 8.46103 6.21057 7.87528 5.62477C7.28944 5.03898 6.33975 5.03898 5.75391 5.62477L0.439312 10.9394C-0.146437 11.5251 -0.146437 12.4749 0.439312 13.0606Z" fill="black"/>
				</svg>
			</a>
            <div class="title">Messages</div>
            <div class="right">
                <a href="#" class="link panel-open" data-panel="left">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M3 8.40009V21.0001C3 21.2653 3.10536 21.5197 3.29289 21.7072C3.48043 21.8947 3.73478 22.0001 4 22.0001H20C20.2652 22.0001 20.5196 21.8947 20.7071 21.7072C20.8946 21.5197 21 21.2653 21 21.0001V8.40009C21.0001 8.23646 20.96 8.07531 20.8833 7.93077C20.8066 7.78623 20.6956 7.66273 20.56 7.5711L12.56 2.1711C12.3946 2.05932 12.1996 1.99959 12 1.99959C11.8004 1.99959 11.6054 2.05932 11.44 2.1711L3.44 7.5711C3.30443 7.66273 3.19342 7.78623 3.11671 7.93077C3.03999 8.07531 2.99992 8.23646 3 8.40009ZM14 20.0001H10V14.0001H14V20.0001ZM5 8.9321L12 4.2071L19 8.9321V20.0001H16V13.0001C16 12.7349 15.8946 12.4805 15.7071 12.293C15.5196 12.1055 15.2652 12.0001 15 12.0001H9C8.73478 12.0001 8.48043 12.1055 8.29289 12.293C8.10536 12.4805 8 12.7349 8 13.0001V20.0001H5V8.9321Z" fill="#04764E"/>
									</svg>
				</a>
            </div>
        </div>
	</div>
	
	<div class="page-content messages-content pt-70">
		<div class="container">
			<div class="messages">
				<div class="message message-sent">
					<div class="message-content">
						<div class="message-bubble">
							<div class="message-text">Do you know my address sir?</div>
						</div>
					</div>
				</div>
				<div class="message message-received">
					<div class="message-content">
						<div class="message-bubble">
							<div class="message-text">Don’t worry, I’ve been there last week. Please wait</div>
						</div>
					</div>
				</div>
				<div class="message message-sent">
					<div class="message-content">
						<div class="message-bubble">
							<div class="message-text">OK</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
    <!-- Message Toolbar -->
	<div class="toolbar container padding messagebar" on:messagebar:attachmentdelete={deleteAttachment}>
		<div class="toolbar-inner">
			<div class="messagebar-area">
				<textarea class="resizable" placeholder="Type message..."></textarea>
			</div>
			<a class="link icon-only demo-send-message-link text-primary" on:click={sendMessage}>
				<i class="icon f7-icons if-not-md">arrow_up_circle_fill</i>
				<i class="icon material-icons md-only">send</i>
			</a>
		</div>
		<div class="messagebar-sheet">
			<!-- ${images.map((image) => $h`
			<label class="checkbox messagebar-sheet-image" style="background-image:url(${image})"
				@change=${handleAttachment}>
				<input type="checkbox" />
				<i class="icon icon-checkbox"></i>
			</label>
			`)} -->
		</div>			
	</div>
	
</div>

<script>
	const deleteAttachment = (e, index) => {
	}
	const sendMessage = () => {
	}
</script>
<!-- <script>
export default (props, { $f7, $el, $on, $ }) => {
    const images = [
		'https://cdn.framework7.io/placeholder/cats-300x300-1.jpg',
		'https://cdn.framework7.io/placeholder/cats-200x300-2.jpg',
		'https://cdn.framework7.io/placeholder/cats-400x300-3.jpg',
		'https://cdn.framework7.io/placeholder/cats-300x150-4.jpg',
		'https://cdn.framework7.io/placeholder/cats-150x300-5.jpg',
		'https://cdn.framework7.io/placeholder/cats-300x300-6.jpg',
		'https://cdn.framework7.io/placeholder/cats-300x300-7.jpg',
		'https://cdn.framework7.io/placeholder/cats-200x300-8.jpg',
		'https://cdn.framework7.io/placeholder/cats-400x300-9.jpg',
		'https://cdn.framework7.io/placeholder/cats-300x150-10.jpg'
    ];
    const people = [
		{
			name: 'Kate Johnson',
		},
		{
			name: 'Blue Ninja',
		},
    ];
    const answers = [
		'Yes!',
		'No',
		'Hm...',
		'I am not sure',
		'And what about you?',
		'May be ;)',
		'Lorem ipsum dolor sit amet, consectetur',
		'What?',
		'Are you sure?',
		'Of course',
		'Need to think about it',
		'Amazing!!!',
    ];

    let responseInProgress = false;
    let messagebar;
    let messages;

    const sheetToggle = () => {
		messagebar.sheetToggle();
    }
    const deleteAttachment = (e, index) => {
		var image = messagebar.attachments.splice(index, 1)[0];
		messagebar.renderAttachments();
		checkAttachments();
		
		// Uncheck in sheet
		var imageIndex = images.indexOf(image);
		$el.value.find('.messagebar-sheet .checkbox').eq(imageIndex).find('input').prop('checked', false);
    }
    const handleAttachment = (e) => {
		var index = $(e.target).parents('label.checkbox').index();
		var image = images[index];
		if (e.target.checked) {
			// Add to attachments
			messagebar.attachments.unshift(image)
		} else {
			// Remove from attachments
			messagebar.attachments.splice(messagebar.attachments.indexOf(image), 1);
		}
		messagebar.renderAttachments();
		checkAttachments();
    }
    const checkAttachments = () => {
		if (messagebar.attachments.length > 0) {
			messagebar.attachmentsShow();
			messagebar.setPlaceholder('Add comment or Send');
		} else {
			messagebar.attachmentsHide();
			messagebar.setPlaceholder('Message');
		}
    }
    const sendMessage = () => {
		var text = messagebar.getValue().replace(/\n/g, '<br />').trim();
		var messagesToSend = [];
		messagebar.attachments.forEach(function (attachment) {
			var size = attachment.split('placeholder/cats-')[1].split('-')[0].split('x');
			messagesToSend.push({
				image: '<img src="' + attachment + '" style="width: ' + (size[0] / 2) + 'px; height: ' + (size[1] / 2) + 'px">'
			});
		});
		if (text.trim().length) {
			messagesToSend.push({
				text: text
			});
		}
		
		// Reset attachments
		messagebar.attachments = [];
		checkAttachments();
		
		// Hide sheet
		messagebar.sheetHide();
		
		// Uncheck selected images in sheet
		messagebar.$sheetEl.find('input').prop('checked', false);
		
		// Clear area
		messagebar.clear();
		
		// Focus area
		if (text.length) messagebar.focus();
		
		// Exit when nothing to send
		if (!messagesToSend.length) return;
		
		// Send message
		messages.addMessages(messagesToSend);

		// Mock response
		if (responseInProgress) return;
		responseInProgress = true;
		setTimeout(function () {
			var answer = answers[Math.floor(Math.random() * answers.length)];
			var person = people[Math.floor(Math.random() * people.length)];
			messages.showTyping({
				header: person.name + ' is typing',
				avatar: person.avatar
			});
			setTimeout(function () {
				messages.addMessage({
					text: answer,
					type: 'received',
					name: person.name,
					avatar: person.avatar
				});
				messages.hideTyping();
				responseInProgress = false;
			}, 4000);
		}, 1000);
	}

    $on('pageInit', () => {
		messagebar = $f7.messagebar.create({
			el: $el.value.find('.messagebar'),
			attachments: []
		});
		messages = $f7.messages.create({
			el: $el.value.find('.messages'),
			firstMessageRule: function (message, previousMessage, nextMessage) {
				if (message.isTitle) return false;
				if (!previousMessage || previousMessage.type !== message.type || previousMessage.name !== message.name) return true;
				return false;
			},
			lastMessageRule: function (message, previousMessage, nextMessage) {
				if (message.isTitle) return false;
				if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
				return false;
			},
			tailMessageRule: function (message, previousMessage, nextMessage) {
				if (message.isTitle) return false;
				if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
				return false;
			}
		});
    })
    $on('pageBeforeRemove', () => {
		messagebar.destroy()
		messages.destroy()
    })
    return $render;
};
</script> -->